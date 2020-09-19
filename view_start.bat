FOR /L %%I IN (1 ,1, 1) DO (
    echo RUN-%%I
    npm run view -- -g specific
)