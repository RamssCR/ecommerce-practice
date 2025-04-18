export const formFields = [
    { name: "name", type: "text", placeholder: "Your Name" },
    { name: "email", type: "email", placeholder: "Your Email" },
    { name: "phone", type: "tel", placeholder: "Your Phone" },
    { name: "message", type: "text", placeholder: "Your Message" }
]

export type FormFieldsType = typeof formFields[number]