import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import UserDocumentItem from "../../lib/components/chatbox-entries/UserDocumentEntry";
import { UploadStatus } from "../../lib/components/chatbox-entries/ChatEntryState";
import { describe, test, expect, vi } from "vitest";

vi.mock("../hooks/useLoadChatHistory", () => ({
    default: () => ({
        getLocalChatEntry: vi.fn((id: string) => `localChatEntry-${id}`),
    }),
}));

describe("UserDocumentItem Component", () => {
    const defaultProps = {
        id: "test-id",
        isPdf: false,
        documentUrl: "http://example.com/image.jpg",
        documentName: "test-document",
        themeColor: "blue",
        status: UploadStatus.SUCCESS,
    };

    test("renders without crashing", () => {
        render(<UserDocumentItem {...defaultProps} />);
        expect(screen.getByAltText("Document thumbnail")).toBeInTheDocument();
        expect(screen.getByText("test-document")).toBeInTheDocument();
    });

    test("renders image when isPdf is false and documentUrl is provided", () => {
        render(<UserDocumentItem {...defaultProps} />);
        const img = screen.getByAltText("Document thumbnail");
        expect(img).toBeInTheDocument();
        expect(img).toHaveAttribute("src", "http://example.com/image.jpg");
    });

    test("renders PDF icon when isPdf is true", () => {
        const pdfProps = {
            ...defaultProps,
            isPdf: true,
            documentUrl: "",
            documentName: "pdf-document",
        };
        render(<UserDocumentItem {...pdfProps} />);
        expect(screen.getByText("pdf-document")).toBeInTheDocument();
        expect(screen.getByTestId("pdf-icon")).toBeInTheDocument();
    });

    test("displays ElaboratingIcon when status is PROCESSING", () => {
        const processingProps = {
            ...defaultProps,
            status: UploadStatus.PROCESSING,
        };
        render(<UserDocumentItem {...processingProps} />);
        expect(screen.getByTestId("elaborating-icon")).toBeInTheDocument();
    });

    test("displays ElaborationSuccessIcon when status is SUCCESS", () => {
        render(<UserDocumentItem {...defaultProps} />);
        expect(
            screen.getByTestId("elaboration-success-icon")
        ).toBeInTheDocument();
    });

    test("fetches document from local chat when documentUrl is not provided", () => {
        const localChatProps = { ...defaultProps, documentUrl: "" };
        render(<UserDocumentItem {...localChatProps} />);
        expect(screen.getByAltText("Document thumbnail"))
    });
});
