/**
=========================================================
* Soft UI Dashboard PRO React - v4.0.0
=========================================================

* Product Page: https://material-ui.com/store/items/soft-ui-pro-dashboard/
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
// react-quill components
import ReactQuill from "react-quill";

// react-quill styles
import "react-quill/dist/quill.snow.css";

// Custom styles for the SoftEditor
import SoftEditorRoot from "components/SoftEditor/SoftEditorRoot";

function SoftEditor(props) {
  return (
    <SoftEditorRoot>
      <ReactQuill theme="snow" {...props} />
    </SoftEditorRoot>
  );
}

export default SoftEditor;
