saveInformation = ()=>{

    var textarea = document.getElementById('textareaInput').value
    var phoneInput = document.getElementById('phoneInput').value
    var emailInput = document.getElementById('emailInput').value
    var nameInput = document.getElementById('nameInput').value
    var id = Math.random();

    let openRequest = indexedDB.open("CustomerDatabase", 1);

    openRequest.onupgradeneeded = function(e) {
        let db = e.target.result;
        if (!db.objectStoreNames.contains('customers')) {
            db.createObjectStore('customers', {keyPath: 'id'});
        }
    };

    openRequest.onsuccess = function(e) {
        let db = e.target.result;
        let tx = db.transaction(['customers'], 'readwrite');
        let store = tx.objectStore('customers');
        store.put({id: id, name: nameInput,email:emailInput,phone:phoneInput,message:textarea}); // Adding data to the store
    };
}