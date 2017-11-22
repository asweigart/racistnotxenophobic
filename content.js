var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(/Xenophobia|Xenophobism/g, 'Racism').replace(/Xenophobic/g, 'Racist').replace(/xenophobia|xenophobism/gi, 'racism').replace(/xenophobic/gi, 'racist');

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}
