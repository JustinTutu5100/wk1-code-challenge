function estimateTransactionFee(amountToSend) {
    const rawFee = amountToSend * 0.015;
    const fee = Math.max(10, Math.min(rawFee, 70)); // kuna minimun na maxim amount 
    const total = amountToSend + fee;

    console.log(`Sending KES ${amountToSend}:`);
    console.log(`Calculated Transaction Fee: KES ${fee}`);
    console.log(`Total amount to be debited: KES ${total}`);
    console.log("Send Money Securely!");
}

const amount = Number(prompt("Unatuma Ngapi? (KES):"));
estimateTransactionFee(amount);
