import Mail from '../lib/Mail.ts'

export default{
  key: 'RegistrationMail',
  async handle({ data }){
    const { user } = data;

    await Mail.sendMail({
      from: 'Queue Test <queue@queuetest.com.br>',
      to: `${user.name} <${user.email}>`,
      subject: 'Cadastro de usuários',
      html: `Olá ${user.name}, bem vindo ao sistema de cadastros!`
    })
  }
}
