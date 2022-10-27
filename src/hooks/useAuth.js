
import {useState} from 'react'

export default function useAuth() {

    const [user, setUser] = useState()

    window.user = user

    async function login(relayone) {

        const token = await relayone.authBeta();

        if (!token) {

            logout()

            return
        }

        const json = JSON.parse(atob(token.split('.')[0]));

        if (!json) {
            
            logout()

            return
        }

        localStorage.setItem('auth.type', 'relayx');
        localStorage.setItem('relayx.token', token);
        localStorage.setItem('relayx.auth', JSON.stringify(json));
        localStorage.setItem('relayx.paymail', json.paymail);
        localStorage.setItem('relayx.pubkey', json.pubkey);
        localStorage.setItem('relayx.origin', json.origin);
        localStorage.setItem('relayx.issued_at', json.issued_at);
      
        const user = {
          pubkey: json.pubkey,
          paymail: json.paymail
        };

        setUser(user)
      
    }

    function restore(relayone) {

        const relayxAuth = localStorage.getItem('relayx.auth')

        window.AUTH = relayxAuth

        console.log('RESTORE', relayxAuth)

        if (localStorage.getItem('relayx.auth')) {

            console.log('yes restore')

            login(relayone)

        }

    }

    function logout() {

        localStorage.removeItem('auth.type')
        localStorage.removeItem('relayx.token')
        localStorage.removeItem('relayx.auth')
        localStorage.removeItem('relayx.paymail')
        localStorage.removeItem('relayx.pubkey')
        localStorage.removeItem('relayx.origin')
        localStorage.removeItem('relayx.issued_at')
      
        setUser(null)

    }

    return { user, login, logout, restore }
}