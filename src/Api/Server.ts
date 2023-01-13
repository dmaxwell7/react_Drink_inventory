let token = '68e9ab1b89655798b6cd2b77c4e0be88ff5331553ec2bbae';

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://antique-unruly-bite.glitch.me/api/drinks`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()

        },

    create: async(data: any = {}) => {
        const response = await fetch(`https://antique-unruly-bite.glitch.me/api/drinks`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': `Bearer ${token}`
                },
                body: JSON.stringify(data)
        });
    
        if(!response.ok){
                throw new Error('Failed to Create new data on server')
        }
    
        return await response.json()
        },
    
    update: async (id:string, data:any = {}) => {
        const response = await fetch(`https://antique-unruly-bite.glitch.me/api/drinks/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': `Bearer ${token}`
                },
                body: JSON.stringify(data)
        });
    },
    
    delete: async(id:string) => {
        const response = await fetch(`https://antique-unruly-bite.glitch.me/api/drinks/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        })
    }
}   