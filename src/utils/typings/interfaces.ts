export interface Plan {
    title: string,
    price: number,
    color: string,
    includes: {
        name: string,
        check: boolean
    }[],
    promotion?: {
        isValid: boolean,
        value: number,
    },
    url?: string,
}

export interface validateProps {
    email: string,
    password: string,
    passwordValidation?: string
    signUpActive?: boolean
}