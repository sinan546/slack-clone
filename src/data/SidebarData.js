import { Apps, BookmarkBorder, Drafts, Inbox, Message, People } from "@material-ui/icons";

export const sidebarItems = [
    {
        icon: <Message/>,
        text: "Thread"
    },
    {
        icon: <Inbox/>,
        text: "All DMs"
    },
    {
        icon: <Drafts/>,
        text: "Mentions & Reactions"
    },
    {
        icon: <BookmarkBorder/>,
        text: "Save Items"
    },
    {
        icon:<People/>,
        text: "People & Groups"
    },
    {
        icon:<Apps/>,
        text: "More"
    }
]