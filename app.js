// Calculate the total amount with cost 
function totalCost() {
    const bestPriceId = document.getElementById('best-price');
    const extraMemoryCostId = document.getElementById('memory-cost');
    const extraStorageCostId = document.getElementById('storage-cost');
    const deliveryCost = document.getElementById('delivery-cost');
    const totalPriceId = document.getElementById('total-price');
    const total = document.getElementById('price');

    const bestPrice = parseInt(bestPriceId.innerText);
    const extraMemoryCost = parseInt(extraMemoryCostId.innerText);
    const storage = parseInt(extraStorageCostId.innerText);
    const delivery = parseInt(deliveryCost.innerText);

    const totalPrice = bestPrice + extraMemoryCost + storage + delivery;
    totalPriceId.innerText = totalPrice;
    total.innerText = totalPrice;
}
// Set All Cost and Id
function setCost(productId, cost) {
    const MemoryCostId = document.getElementById(productId);
    MemoryCostId.innerText = cost;
    totalCost();
}
// Memory Cost Button 
document.getElementById('memory-btn').addEventListener('click', function (event) {
    const memoryText = event.target.innerText;
    if (memoryText == '8GB-unified-memory') {
        setCost('memory-cost', 0);
    }
    else if (memoryText == '16GB-unified-memory') {
        setCost('memory-cost', 180);
    }
});

// Storage Cost button
document.getElementById('storage-btn').addEventListener('click', function (event) {
    const storageText = event.target.innerText;
    if (storageText == '256GB-SSD-storage') {
        setCost('storage-cost', 0);
    }
    else if (storageText == '512GB-SSD-storage') {
        setCost('storage-cost', 100);
    }
    else if (storageText == '1TB-SSD-storage') {
        setCost('storage-cost', 180);
    }
});

// Delivery Cost button
document.getElementById('delivery-btn').addEventListener('click', function (event) {
    const deliveryText = event.target.innerText;
    if (deliveryText == 'Friday-Aug-25-FREE-Prime-Delivery') {
        setCost('delivery-cost', 0);
    }
    else if (deliveryText == 'Friday-Aug-20-Delivery-charge-$20') {
        setCost('delivery-cost', 20);
    }
});

// 20% Discount by using steve uncle coupon code  
document.getElementById('apply-btn').addEventListener('click', function () {
    const codeInput = document.getElementById('code-input');
    const codeInputValue = codeInput.value;
    const totalId = document.getElementById('price');
    const totalIdValue = parseFloat(totalId.innerText);
    const couponCode = totalIdValue * .2;

    if (codeInputValue == 'stevekaku') {
        totalId.innerText = totalIdValue - couponCode;
        document.getElementById("apply-btn").disabled = true;
    }
    // clear input field 
    codeInput.value = '';

});
