import PhonesBg from '../assets/phones-bg.png'
import Image from 'next/image'
import logo from '../assets/logo.svg'
import usersAvatarList from '../assets/user-avatar-list.png'
import CheckIcon from '../assets/icon-check.svg'
import { api } from '../lib/axios'
import { FormEvent, useEffect, useState } from 'react'
interface HomeProps {
  poolCount: number,
  usersCount: number,
  guessesCount: number;
}
export default function Home(props: HomeProps) {

  const [poolTitle, setPoolTitle] = useState('')
  const [poolCountValue, setPoolCountValue] = useState(0)
  const [usersCountValue, setUsersCountValue] = useState(0)
  const [guessesCountValue, setGuessesCountValue] = useState(0)
  useEffect(() => {

    setPoolCountValue(props.poolCount)
    setGuessesCountValue(props.guessesCount)
    setUsersCountValue(props.usersCount)
    
  })

  async function CreatePool(event: FormEvent) {
    event.preventDefault()


    try {

      const response = await api.post('/pools', {
        title: poolTitle,
      })
      const { code } = response.data
      await navigator.clipboard.writeText(code)
      alert(`Bolão criado com sucesso, o código ${code} foi copiado pra sua área de transferência.`)
      setPoolTitle('')
    } catch (err) {
      console.log(err)
      alert('Falha ao criar o bolão')
    }

  }

  return (
    <div className='max-w-[1124px] h-screen mx-auto grid grid-cols-2 items-center text-white'>
      <main>
        <Image src={logo} alt='Logo NLW Copa' />
        <h1 className='text-green-300 text-xl mt-14 font-bold leading-tight'>Crie seu próprio bolão da copa e compartilhe entre amigos!</h1>
        <div className='mt-10 flex items-center gap-2'>

          <Image src={usersAvatarList} alt="Usuarios conectados" />

          <strong className=''>
            <span className='text-green-300'>+{usersCountValue}</span> pessoas já estão usando
          </strong>

        </div>

        <form className='mt-10 flex gap-2 mb-4' onSubmit={CreatePool}>

          <input
            type="text"
            id="pollName"
            required placeholder='Qual o nome do seu bolão?'
            onChange={event => setPoolTitle(event.target.value)}
            className='bg-gray-600 rounded text-gray-200 text-left text-base px-6 py-4 flex-1 justify-between border border-gray-500'
            value={poolTitle}
          />

          <button type='submit' className='bg-yellow-400 text-base rounded font-bold text-black px-6 py-4'>CRIAR MEU BOLÃO</button>

        </form>

        <span className='text-base text-gray-400 text-left'>Após criar seu bolão, você receberá um código único que poderá usar para convidar outras pessoas 🚀</span>



        <div className='flex justify-between mt-10 text-gray-text border-t-2 border-gray-500 pt-10'>

          <div className='flex items-center gap-6 '>
            <Image src={CheckIcon} alt='' />
            <span>
              <strong className='text-lg'>+{poolCountValue}</strong> <br />
              Bolões criados
            </span>
          </div>
          <div className='flex items-center gap-6'>
            <Image src={CheckIcon} alt='' />
            <span className='text-sm'>
              <strong className='text-lg text'>+{guessesCountValue}</strong> <br />
              Palpites enviados
            </span>
          </div>

        </div>
      </main>

      <Image src={PhonesBg} alt="Dois celulares exibindo uma prévia da aplicação móvel do NLW Copa" quality={100} />

    </div>
  )
}
export const getStaticProps = async () => {

  const [PollCountResponse, GuessesCountResponse, UserCountResponse] = await Promise.all([


    api.get('pools/count'),
    api.get('guesses/count'),
    api.get('users/count')
  ])

  return {
    props: {
      poolCount: PollCountResponse.data.count,
      guessesCount: GuessesCountResponse.data.count,
      usersCount: UserCountResponse.data.count
    },
    revalidate: 10,
  }
}
