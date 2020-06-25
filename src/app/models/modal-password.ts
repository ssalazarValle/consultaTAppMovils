export class PasswordRecovery {
    public static CheckInputs = [
        {
            label: 'No recuerdo la contraseña.',
            controlName: 'noRecuerdo'
        }, {
            label: 'Bloqueo por exceder el número de intentos permitidos o bloqueo por inactividad de la cuenta.',
            controlName: 'inactividad'
        }, {
            label: 'Desbloquear cuenta porque la contraseña en el sistema caduco.',
            controlName: 'caduco'
        }
    ]
}