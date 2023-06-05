import React from 'react';
import Comment from './Comment';
import InputBox from './InputBox';

const CommentSection = () => {
    return (
        <div className="mt-16 w-full">
            <h2 className="text-2xl lg:text-3xl font-semibold my-6">
                Top Comments (3)
            </h2>
            {/* TEXT AREA */}
            <InputBox />
            {/* COMMENT */}
            <div className="mt-10">
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
            </div>
        </div>
    );
};

export default CommentSection;
