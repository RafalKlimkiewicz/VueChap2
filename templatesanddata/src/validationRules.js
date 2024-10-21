function required(name) {
    return {
        validator: (value) => value != "" && value !== undefined && value !== null,
        message: `Field ${name} cannot be empty`
    }
}

function minLength(name, minLength) {
    return {
        validator: (value) => String(value).length >= minLength,
        message: `Field ${name} requires at least ${minLength} signs`
    }
}

function alpha(name) {
    return {
        validator: (value) => /^[a-zA-z]*$/.test(value),
        message: `Field ${name} can only has letters`
    }
}

function numeric(name) {
    return {
        validator: (value) => /^[0-9]*$/.test(value),
        message: `name ${name} can has numbers`
    }
}

function range(name, min, max) {
    return {
        validator: (value) => value >= min && value <= max,
        message: `name ${name} can has value from ${min} to ${max}`
    }
}

export default {
    name: [minLength("Name", 3)],
    category: [required("Category"), alpha("Category")],
    price: [numeric("Price"), range("Price", 1, 1000)]
}