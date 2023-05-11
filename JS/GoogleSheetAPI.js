function Read(Sheet, Range) {
    return `this is a sample response from reading ${Sheet}!${Range}`
}

function Replace(ObjectRef) {
    return {
        By: (Content) => {
            ObjectRef.innerText = Content
        }
    }
}
