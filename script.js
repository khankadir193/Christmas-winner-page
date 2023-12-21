const rulesBtn = document.getElementById('showDialogButton');
const customeDialog = document.getElementById('customDialog');


rulesBtn.addEventListener('click',function (){
    console.log('clicked... on guide button...');
    customeDialog.showModal();
});