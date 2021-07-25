const deliveryFees = 2.5;
export {deliveryFees};

const formatPrice = (price) => {
    return Intl.NumberFormat('fr-EU', { style: 'currency', currency: 'EUR' }).format(price)
}
export {formatPrice}