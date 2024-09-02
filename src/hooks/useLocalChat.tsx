import { ChatItemConfig } from "../components/chat-items/ChatItemConfig";

const useLocalChat = () => {

    enum Storage {
        HISTORY = 'chat-history',
        THUMBNAIL = 'chat-thumbnail',
    }

    const loadLocalChat = () => {
        const savedComponents = localStorage.getItem(Storage.HISTORY);
        if(!savedComponents){
            return '';
        }
        const parsedData = JSON.parse(savedComponents);
        const isEmptyArray = Array.isArray(parsedData) && parsedData.length === 0;
        return (isEmptyArray) ? '' : savedComponents;
    }

    const saveLocalChatHistory = (renderedChatItems: ChatItemConfig[]) => {
        localStorage.setItem(Storage.HISTORY, JSON.stringify([...renderedChatItems]));   
    }

    const saveBinaryLocalChat = (id: string, blob: string) => {
        localStorage.setItem(id, blob);   
    }

    const getLocalChatEntry = (id: string) => {
        return localStorage.getItem(id);   
    }

    const clearLocalChat = () => {
        localStorage.clear();
    }

    return {loadLocalChat, saveLocalChatHistory, saveBinaryLocalChat, getLocalChatEntry, clearLocalChat}
};

export default useLocalChat;