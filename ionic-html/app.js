const reasonInput = document.querySelector('#reasonInput');
const amountInput = document.querySelector('#amountInput');
const btnClear = document.querySelector('#btnClear');
const btnAdd = document.querySelector('#btnAdd');
const listExpenses = document.querySelector('#listExpenses');
const textTotal = document.querySelector('#textTotal');
const alerController = document.querySelector('ion-alert-controller');

let total = 0;

if (btnClear && btnAdd) {
    btnClear.addEventListener("click", clearExpense)
    btnAdd.addEventListener("click", addExpense)
}
else {
    console.error("error on eventlistener")
}

function clearExpense() {
    amountInput.value = "";
    reasonInput.value = "";
}

async function addExpense() {
    if (!reasonInput.value || !amountInput.value) {
        const alert = document.createElement('ion-alert');
        alert.cssClass = 'my-custom-class';
        alert.header = 'Alert';
        alert.subHeader = 'Subtitle';
        alert.message = 'This is an alert message.';
        alert.buttons = ['OK'];

        document.body.appendChild(alert);
        await alert.present();

        const { role } = await alert.onDidDismiss();
        console.log('onDidDismiss resolved with role', role);

        return
    }
    const item = document.createElement('ion-item');
    item.textContent = ` ${reasonInput.value}: $${amountInput.value} `

    listExpenses.appendChild(item);

    total += new Number(amountInput.value);

    textTotal.textContent = `total: $${total}`

    clearExpense();
}
