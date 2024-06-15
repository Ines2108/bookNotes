export type Book = {
    id: string;
    title: string;
    author: string;
    coverUrl: string;
    starRating: number;
    comments: Comment[];
};

export type Comment = {
    commentId: string;
    text: string;
    createdAt: string;
};
