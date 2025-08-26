/*
  TGIS Schoolbox - Dynamic Content Script
  - Implements a smooth, non-stuttering typing animation.
  - Dynamically adds the "Made By" credit to the footer.
*/
document.addEventListener('DOMContentLoaded', () => {

    // --- SMOOTH TYPING ANIMATION ---
    const welcomeHeader = document.querySelector('div#component17 h1');

    if (welcomeHeader) {
        // This function finds all text nodes within an element, preserving HTML structure.
        const getAllTextNodes = (el) => {
            const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null, false);
            const nodes = [];
            let node;
            while (node = walker.nextNode()) {
                nodes.push(node);
            }
            return nodes;
        };

        const textNodes = getAllTextNodes(welcomeHeader);
        const originalTexts = textNodes.map(node => {
            const text = node.nodeValue;
            node.nodeValue = ''; // Clear the text node
            return text;
        });

        welcomeHeader.classList.add('typing-effect');
        
        let nodeIndex = 0;
        let charIndex = 0;
        const typingSpeed = 40; // Milliseconds per character

        const type = () => {
            if (nodeIndex >= textNodes.length) {
                // Animation finished
                setTimeout(() => welcomeHeader.classList.remove('typing-effect'), 750);
                return;
            }

            const currentNode = textNodes[nodeIndex];
            const currentText = originalTexts[nodeIndex];

            if (charIndex < currentText.length) {
                currentNode.nodeValue += currentText[charIndex];
                charIndex++;
            } else {
                nodeIndex++;
                charIndex = 0;
            }
            
            setTimeout(type, typingSpeed);
        };

        // Start the animation after a brief delay for page elements to settle
        setTimeout(type, 500);
    }

    // --- DYNAMIC FOOTER CREDIT ---
    const footerList = document.querySelector('#footer ul');
    if (footerList) {
        const madeByLi = document.createElement('li');
        const madeByLink = document.createElement('a');

        madeByLink.id = 'made-by-link';
        madeByLink.href = 'https://github.com/DmitriiTrofilov';
        madeByLink.target = '_blank'; // Open in a new tab
        madeByLink.textContent = 'Made By Dmitrii T';

        madeByLi.appendChild(madeByLink);
        footerList.appendChild(madeByLi);
    }
});