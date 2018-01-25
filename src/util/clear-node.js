export default function clearNode(node) {
    const cNode = node.cloneNode(false);
    node.parentNode.replaceChild(cNode, node);
    return cNode;
}
