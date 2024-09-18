const form = document.getElementById('form');
const btnReturn = document.getElementById('btn-success');
const cardNumber = document.getElementById('number');

cardNumber.addEventListener('input', function() {
    this.value = this.value.replace(/\D/g, '');

    if (this.value.length > 16) {
        this.value = this.value.slice(0, 16);
    }
});

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const cardName = document.getElementById('name');
    const expiryMonth = document.getElementById('month-expiry');
    const expiryYear = document.getElementById('year-expiry');
    const cvcCard = document.getElementById('cvc');

    const errorName = document.getElementById('error-name');
    const errorNumber = document.getElementById('error-number');
    const errorExpiry = document.getElementById('error-expiry');
    const errorCvc = document.getElementById('error-cvc');

    const cardNameContainer = document.getElementById('name-card');
    const cardNumberContainer = document.getElementById('number-card');
    const expiryContainer = document.getElementById('expiry-card');
    const cvcContainer = document.getElementById('cvc-card');

    const fields = [
        { value: cardName.value, errorElement: errorName, errorColor: cardName},
        { value: cardNumber.value, errorElement: errorNumber, errorColor: cardNumber},
        { value: expiryMonth.value, errorElement: errorExpiry, errorColor: expiryMonth},
        { value: expiryYear.value, errorElement: errorExpiry, errorColor: expiryYear},
        { value: cvcCard.value, errorElement: errorCvc, errorColor: cvcCard},
    ];

    let isFormValid = true;

    fields.forEach(field => {
        if (field.value.trim() === '') {
            field.errorElement.classList.remove('error-disabled');
            field.errorColor.classList.add('error-color');
            field.errorElement.classList.add('error-message');
            isFormValid = false; 
        } else {
            field.errorElement.textContent = '';
            field.errorElement.classList.add('error-disabled');            
            field.errorColor.classList.remove('error-color');
            field.errorElement.classList.remove('error-message');
        }
    });

    if (isFormValid) {
        const cardForm = document.getElementById('form-card');
        const successCard = document.getElementById('success-card');

        cardForm.style.display = 'none';
        successCard.style.display = 'flex';

        const cardValues = [
            { value: cardName.value, containerCard: cardNameContainer },
            { value: cardNumber.value, containerCard: cardNumberContainer },
            { value: `${expiryMonth.value}/${expiryYear.value}`, containerCard: expiryContainer },
            { value: cvcCard.value, containerCard: cvcContainer },
        ];
    
        cardValues.forEach(field => {
            field.containerCard.textContent = field.value;
        });
    }
});

btnReturn.addEventListener('click', () => {
    window.location.reload();
});