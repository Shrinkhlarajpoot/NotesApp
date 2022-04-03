import "./RichTextEditor.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const formats = ["bold", "italic", "underline", "strike", "image", "list", "link", "clean", "video"];
const modules = {
    toolbar: [
        ["bold", "italic", "underline", "strike"],
        [],
        [{ list: "ordered" }, { list: "bullet" }],
        [],
        ["image", "video", "link"],
        ["clean"],
    ],
};

export function RichTextEditor({ value, setValue }) {
    return (
        <ReactQuill
            modules={modules}
            formats={formats}
            value={value}
            placeholder="Take a note..."
            onChange={setValue}
        />
    );
}