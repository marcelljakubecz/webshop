interface ErrorState {
    hasError: boolean;
    errorMessage: string;
}

export const errorInitialState: ErrorState = {
    errorMessage: '',
    hasError: false
}