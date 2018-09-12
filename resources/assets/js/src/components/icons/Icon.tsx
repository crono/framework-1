import * as React from "react";

interface IconProps {
    name: string;
}

/**
 * Icon component.
 */
class Icon extends React.Component <IconProps> {
    constructor(props: IconProps) {
        super(props);
    }

    /**
     * Render the component.
     * Default icon is the "saving" one.
     */
    render() {
        switch (this.props.name) {
            case 'done':
                return (
                    <svg className="themosis__svg icon__done" width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.1221 0L21.9535 1.61373L9.67728 16H6.84594L0 8.20601L2.83134 6.06009L8.26161 10.1803L19.1221 0Z" fill="#46B450"/>
                    </svg>
                );
            case 'error':
                return (
                    <svg className="themosis__svg icon__error" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 2.84848L12.8485 10L20 17.1515L17.1515 20L10 12.8687L2.86869 20L0 17.1313L7.13131 10L0 2.86869L2.86869 0L10 7.13131L17.1515 0L20 2.84848Z" fill="#BE1414"/>
                    </svg>
                );
            case 'minus':
                return (
                    <svg className="themosis__svg icon__minus" width="12" height="2" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="12" height="2" fill="#444444"/>
                    </svg>
                );
            case 'plus':
                return (
                    <svg className="themosis__svg icon__plus" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 5V0H5V5H0V7H5V12H7V7H12V5H7Z" fill="#444444"/>
                    </svg>
                );
            default:
                return (
                    <svg className="themosis__svg icon__saving" width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.2154 0C15.4271 0 18.8872 3.10714 19.4718 7.14286H21.9535L17.7776 11.9048L13.6016 7.14286H16.3697C15.8328 4.79762 13.7329 3.03571 11.2154 3.03571C9.48534 3.03571 7.95814 3.88095 6.99171 5.15476L4.95147 2.83333C6.47866 1.09524 8.72174 0 11.2154 0ZM10.7381 16C6.53832 16 3.06633 12.8929 2.4817 8.85714H0L4.17594 4.09524C5.57189 5.67857 6.95591 7.27381 8.35187 8.85714H5.58382C6.12073 11.2024 8.22063 12.9643 10.7381 12.9643C12.4681 12.9643 13.9953 12.119 14.9618 10.8452L17.002 13.1667C15.4748 14.9048 13.2437 16 10.7381 16Z" fill="#0085BA"/>
                    </svg>
                );
        }
    }
}

export default Icon;