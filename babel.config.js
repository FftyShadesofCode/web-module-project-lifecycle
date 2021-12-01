/*
 * Copyright (c) 2021. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
 * Morbi non lorem porttitor neque feugiat blandit. Ut vitae ipsum eget quam lacinia accumsan.
 * Etiam sed turpis ac ipsum condimentum fringilla. Maecenas magna.
 * Proin dapibus sapien vel ante. Aliquam erat volutpat. Pellentesque sagittis ligula eget metus.
 * Vestibulum commodo. Ut rhoncus gravida arcu.
 */

module.exports = {
    env: {
        testing: { // matches the `NODE_ENV=testing` in "test" script in package.json
            plugins: [
                '@babel/plugin-transform-runtime',
            ],
            presets: [
                ['@babel/preset-react'],
                [
                    '@babel/preset-env',
                    {
                        modules: 'commonjs',
                        debug: false
                    }
                ]
            ]
        }
    }
};
