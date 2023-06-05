import React from 'react';

const PostDetailRight = () => {
    return (
        <section className="hidden lg:inline-flex flex-col w-[25%] h-full px-2 space-y-4">
            <article className="w-full h-[300px] bg-dark1 flex items-center justify-center text-white">
                User profile card
            </article>
            <article className="w-full h-[350px] bg-dark1 flex items-center justify-center text-white sticky top-[70px]">
                Users recent posts
            </article>
        </section>
    );
};

export default PostDetailRight;
