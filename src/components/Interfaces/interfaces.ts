export interface Posts {
    userID: number,
    id: number,
    title?: string,
    body?: string
}

export interface Comments {
    postId: number,
    id: number,
    name?: string,
    email?: string,
    body?: string
}

