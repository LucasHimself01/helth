//this script will be run withing the webview itself
//it cannot access the vs code api directly
(function() {
    const vscode = acquireVsCodeApi();

    const button = document.getElementById('button');
    button.innerText = 'Click to send message to extension';
})();