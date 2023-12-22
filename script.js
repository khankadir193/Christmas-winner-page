const rulesBtn = document.getElementById('showDialogButton');
const customeDialog = document.getElementById('customDialog');


rulesBtn.addEventListener('click',function (){
    console.log('clicked... on guide button...');
    customeDialog.showModal();
});

document.querySelector('button').addEventListener('click',function (){
    console.log('this is the close button');
    customeDialog.close();
})