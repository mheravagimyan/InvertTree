'use strict';

const item = {
    left: {
        value: 2,
        left: {
            value: 4
        }, 
        right: {
            value: 5
        }
    },
    right: {
        value: 3,
        left: {
            value: 6
        },
        right: {
            value: 7
        }
    }
};

function invertTree1(node) {
    let l = node.left.value,
        lL = node.left.left.value,
        lR = node.left.right.value;
    
    //For left side
    node.left.value = node.right.value;
    node.left.left.value = node.right.right.value;
    node.left.right.value = node.right.left.value;    

    //For right side
    node.right.value = l;
    node.right.right.value = lL;
    node.right.left.value = lR;
}

function invertTree2(node) {
    if(node.left == undefined || node.right == undefined) {
        return;
    }
    [node.left, node.right] = [node.right, node.left];
    invertTree2(node.left);
    invertTree2(node.right);
}

console.log(item);

invertTree2(item);

console.log(item);