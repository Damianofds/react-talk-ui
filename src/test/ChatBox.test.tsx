import { render, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, test, beforeEach, afterEach, vi, expect } from "vitest";
import ChatBox from "../../lib/components/ChatBox";
import { BotTalkContext } from "../../lib/components/BotTalkContext";
import useBotTalk from "../../lib/hooks/useBotTalk";
import useLoadChatHistory from "../../lib/hooks/useLoadChatHistory";
import { UploadStatus, UserTextEntryState } from "../../lib/components/chatbox-entries/ChatEntryState";

vi.mock("../../lib/hooks/useBotTalk");
vi.mock("../../lib/hooks/useLoadChatHistory");

describe("ChatBox Component", () => {
    const mockUseBotTalk = useBotTalk as ReturnType<typeof vi.fn>;
    const mockUseLoadChatHistoty = useLoadChatHistory as ReturnType<typeof vi.fn>;
    const mockSaveLocalChatHistory = useLoadChatHistory as ReturnType<typeof vi.fn>;

    const defaultProps = {
        currentTalkURL: "http://example.com",
        isTalkSwitched: false,
        chatMessage: undefined,
        updateStatus: {entryId: "1", outcome: UploadStatus.PROCESSING},
        fontSize: "16px",
        themeColor: "#4ea699",
    };

    const mockTalkCurrentItem = {
        id: "stream-1",
        type: "bot-text",
        text: "Sample text",
        isCompleted: false,
    };

    beforeEach(() => {
        const mockSaveLocalChatHistory = vi.fn(() =>
            console.log("saving local chat history...")
        );

        mockUseBotTalk.mockReturnValue({
            talkCurrentItem: mockTalkCurrentItem,
            isLastItem: false,
        });

        mockUseLoadChatHistoty.mockReturnValue({
            loadLocalChat: vi.fn(() => []),
            saveLocalChatHistory: mockSaveLocalChatHistory,
        });
    });

    afterEach(() => {
        vi.clearAllMocks();
    });

    test("renders ChatBox component and displays chat items", () => {
        render(<ChatBox {...defaultProps} />);
        expect(screen.getByText("Sample text")).toBeInTheDocument();
    });

    test("loads initial talk and renders streamed chat item", async () => {
        mockUseBotTalk.mockReturnValueOnce({
            talkCurrentItem: mockTalkCurrentItem,
            isLastItem: false,
        });

        await act(async () => {
            render(<ChatBox {...defaultProps} />);
        });

        expect(screen.getByText("Sample text")).toBeInTheDocument();
    });

    test("saves chat history after loading", () => {
        render(<ChatBox {...defaultProps} />);

        expect(mockSaveLocalChatHistory).toHaveBeenCalled();
    });

    test("switches conversation when the switchTalk function is called", () => {
        const mockSwitchConversation = vi.fn();

        render(
            <BotTalkContext.Provider
                value={{ switchBotTalk: mockSwitchConversation }}>
                <ChatBox {...defaultProps} />
            </BotTalkContext.Provider>
        );

        act(() => {
            mockSwitchConversation("http://new-example.com");
        });

        expect(mockSwitchConversation).toHaveBeenCalledWith(
            "http://new-example.com"
        );
    });

    test("handles AI messages and updates chat items accordingly", async () => {
        const newMessage: UserTextEntryState = {
            id: "stream-2",
            type: "user-text",
            text: "New AI message",
        };

        render(<ChatBox {...defaultProps} chatMessage={newMessage} />);

        expect(screen.getByText("New AI message")).toBeInTheDocument();
    });
});
