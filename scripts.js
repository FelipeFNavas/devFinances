const Modal = {
    open(){
        document
        .querySelector('.modal-overlay')
        .classList.add('active')
    },
    close(){
        document
        .querySelector('.modal-overlay')
        .classList.remove('active')
    }
}

const transactions = [
    {
        id: 1,
        description: 'luz',
        amount: -50000,
        date: '23/01/2021',
    },
    {
        id: 2,
        description: 'website',
        amount: 500000,
        date: '23/01/2021',
    },
    {
        id: 3,
        description: 'internet',
        amount: -20000,
        date: '23/01/2021',
    }
]

const Transaction = {
    incomes(){

    },
    expenses(){

    },
    total(){

    }
}

const DOM = {
    transactionsContainer: document.querySelector('#data-table tbody'),


    addTransaction(transaction, index){
        const tr = document.createElement('tr');
        tr.innerHTML = DOM.innerHTMLTransaction(transaction)

        DOM.transactionsContainer.appendChild(tr);
    },
    innerHTMLTransaction(transaction){
        const CSSclass = transaction.amount > 0 ? "income" : "expense";

        const amount = Utils.formatCurrency(transaction.amount);

        const html = `
            <td class="description">${transaction.description}</td>
            <td class="${CSSclass}">${transaction.amount}</td>
            <td class="date">${transaction.date}</td>
            <td>
                <img src="./assets/minus.svg" alt="Remover trasação">
            </td>
        `

        return html;
    }
}

const Utils = {
    formatCurrency(value){
        const sign = Number(value) < 0 ? "-" : "";
    }
}

transactions.forEach(function(transaction){
    DOM.addTransaction(transaction)
})