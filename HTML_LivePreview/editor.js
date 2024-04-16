document.addEventListener('DOMContentLoaded', () => {
    const editor = document.getElementById('editor');
    const preview = document.getElementById('preview');
    const runButton = document.getElementById('run');
    const toggleAutoUpdateButton = document.getElementById('toggleAutoUpdate');
    let autoUpdateEnabled = true; // Auto-update is enabled by default

    editor.addEventListener('input', function() {
        if (autoUpdateEnabled) updatePreview();
    });
    editor.addEventListener('keydown', handleAutoComplete);

    toggleAutoUpdateButton.addEventListener('click', () => {
        autoUpdateEnabled = !autoUpdateEnabled; // Toggle the state
        runButton.style.display = autoUpdateEnabled ? 'none' : 'block'; // Show or hide the Run button
    });

    runButton.addEventListener('click', updatePreview); // Manual update

    function updatePreview() {
        const content = editor.innerText;
        preview.contentWindow.document.open();
        preview.contentWindow.document.write(content);
        preview.contentWindow.document.close();
    }

    function handleAutoComplete(e) {
        if (['(', '{', '['].includes(e.key)) {
            const pairs = {'(': ')', '{': '}', '[': ']'};
            insertTextAtCursor(editor, e.key + pairs[e.key]);
            e.preventDefault();
        }
    }

    function insertTextAtCursor(el, text) {
        const sel = window.getSelection();
        const range = sel.getRangeAt(0);
        range.deleteContents();
        const textNode = document.createTextNode(text);
        range.insertNode(textNode);
        range.setStart(textNode, textNode.length - text.length + 1); // Set cursor inside brackets
        sel.removeAllRanges();
        sel.addRange(range);
    }
});
