function Read(Sheet, Range) {
    return `this is a sample response from reading ${Sheet}!${Range}`
}

function Replace(ObjectID) {
    let ObjectRef = document.getElementById(ObjectID)
    return {
        By: (Content) => {
            ObjectRef.innerText = Content
        }
    }
}
