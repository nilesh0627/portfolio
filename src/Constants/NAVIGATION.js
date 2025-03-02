import {
    AiFillStar,
    AiOutlineHome,
    AiOutlineFundProjectionScreen,
    AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
export const NAVBAR_ITEMS = [
    {
        Icon: AiOutlineHome,
        name: 'Home',
        to: '/'
    },
    {
        Icon: AiOutlineUser,
        name: 'Experience',
        to: '/experience'
    },
    {
        Icon: AiOutlineFundProjectionScreen,
        name: 'Projects',
        to: '/projects'
    },
    {
        Icon: CgFileDocument,
        name: 'Resume',
        to: '/resume'
    },
]