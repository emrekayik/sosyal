import AuthForm from './auth-form'

export default function Home() {

  return (
    <div>
      <div className="min-h-screen flex justify-center items-center">
        <div className="w-96 flex flex-col space-y-2 items-center">
          <h1 className="text-3xl font-bold">Sosyal Giriş</h1>
          <div className="divider"></div>
          <AuthForm />
        </div>
      </div>
    </div>
  )
}
