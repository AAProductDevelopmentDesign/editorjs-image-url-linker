const editor = new EditorJS({
    holder: "editorjs",
    tools: {
        image: {
            class: SimpleImage,
            inlineToolbar: true,
        }
    },
    onChange: async (e) => { await e.saver.save()},
    data: {
        "time": 1602919875295,
        "blocks": [
            {
                "type": "paragraph",
                "data": {
                    "text": "Paste an image here to test"
                }
            }
        ],
        "version": "2.19.0"
    }
});