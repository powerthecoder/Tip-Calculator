function calculateTip(){
    // Get Values
    let subtotal_ = document.getElementById("bill_amount").value;
    let tip_ = document.getElementById("tip_perc").value;

    // Checks
    if (subtotal_ === ""){
        alert(`Double check your Subtotal ${subtotal_}`)
        return;
    }
    
    if (tip_ === ""){
        alert(`Double check your tip ${tip_}`)
    }

    // Convert to Float
    let subtotal = parseFloat(subtotal_)
    let tip = parseFloat(tip_)

    // Math Formula
    let total1 = subtotal / tip
    let total = subtotal + total1
    
    // Display Total
    document.getElementById("total_bill").style.display = "block";
    document.getElementById("total").innerHTML = total;
}