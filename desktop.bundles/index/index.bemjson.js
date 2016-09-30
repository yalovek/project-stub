module.exports = {
    block : 'page',
    title : 'Яндекс.Музыка',
    favicon : '/favicon.ico',
    head : [
        { elem : 'meta', attrs : { name : 'description', content : '' } },
        { elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } },
        { elem : 'css', url : 'index.min.css' }
    ],
    scripts: [{ elem : 'js', url : 'index.min.js' }],
    mods : { theme : 'islands' },
    content : [
        {
            block : 'header',
            tag: 'header',
            content : [
                {
                    elem: 'side',
                    elemMods: { align: 'left' },
                    content: [
                        {
                            block: 'logo',
                            mix: { block: 'header', elem: 'logo' },
                        },
                        {
                            elem: 'nameplate',
                            url: '//music.yandex.ru',
                            content: 'Music'
                        },
                        {
                            block: 'form',
                            tag: 'form',
                            action: '/',
                            method: 'POST',
                            content: {
                                block : 'control-group',
                                content : [
                                    {
                                        block : 'input',
                                        mix: { block: 'header', elem: 'search-input' },
                                        mods : { theme : 'islands', size : 'l', type : 'search', 'has-clear' : true },
                                        placeholder : 'Track, artist'
                                    },
                                    {
                                        block : 'button',
                                        mods : { theme : 'islands', size : 'l', type: 'submit' },
                                        text : 'Search'
                                    }
                                ]
                            }
                        }
                    ]
                },
                {
                    elem: 'side',
                    elemMods: { align: 'right' },
                    content: [

                        /* some block */
                    ]
                }
            ]
        },
    ]
};
