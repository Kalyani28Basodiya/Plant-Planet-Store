import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const users = [
          { id: '1', name: 'Kalyani', email: 'kalyani@gmail.com', password: '123456' },
          { id: '2', name: 'Test User', email: 'test@gmail.com', password: '123456' },
        ]

        const user = users.find(
          u => u.email === credentials?.email && u.password === credentials?.password
        )

        if (user) {
          return { id: user.id, name: user.name, email: user.email }
        }
        return null
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: 'jwt' },
  pages: {
    signIn: '/login',
  },
})

export { handler as GET, handler as POST }
