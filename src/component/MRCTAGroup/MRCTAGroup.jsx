import { MRCTA } from "@/component"

const MRCTAGroup = ({
    classes = "",
    animation = "",
    text1 = "Connect with Us!",
    text2 = "Call us NOW!",
}) => {
    return (
        <div className={`grid grid-cols-1 mr-sm:flex gap-3 ${classes}`}>
            <MRCTA
                text={text1}
                classes="hover:bg-secondary-100"
                handle="onclick='parent.LC_API.open_chat_window();return false;'"
                animation={animation}
            />
            <MRCTA
                text={text2}
                link="tel:0123456789"
                bg="bg-transparent"
                color="text-primary-100"
                border="border-primary-100 hover:!bg-primary-100 hover:border-transparent hover:text-white"
                animation={animation}
            />
        </div>
    )
}

export default MRCTAGroup