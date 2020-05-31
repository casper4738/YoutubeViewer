FOR /L %%I IN (1 ,1, 10) DO (
    echo RUN-%%I
    npm run view
)