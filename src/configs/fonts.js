
import localFont from "next/font/local";

// const primary = Poppins({
//     weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
//     style: ['normal', 'italic'],
//     display: 'swap',
//     subsets: ['latin'],
//     variable: '--font-primary',
// });
const primary = localFont({
    src: [{
        path: '../font/SFProDisplay-Regular.woff',
        weight: '400',
        style: 'normal',
    }, {
        path: '../font/SFProDisplay-Medium.woff',
        weight: '500',
        style: 'normal',
    },
    {
        path: '../font/SFProDisplay-Semibold.woff',
        weight: '600',
        style: 'normal',
    },
    {
        path: '../font/SFProDisplay-Bold.woff',
        weight: '700',
        style: 'normal',
    },
    {
        path: '../font/SFProDisplay-Heavy.woff',
        weight: '900',
        style: 'normal',
    }],
    variable: '--font-sfprodisplay',
    subsets: ['latin'],
    display: 'swap',
});
const SfProDisplay = localFont({
    src: [{
        path: '../font/SFProDisplay-Regular.woff',
        weight: '400',
        style: 'normal',
    }, {
        path: '../font/SFProDisplay-Medium.woff',
        weight: '500',
        style: 'normal',
    },
    {
        path: '../font/SFProDisplay-Semibold.woff',
        weight: '600',
        style: 'normal',
    },
    {
        path: '../font/SFProDisplay-Bold.woff',
        weight: '700',
        style: 'normal',
    },
    {
        path: '../font/SFProDisplay-Heavy.woff',
        weight: '900',
        style: 'normal',
    }],
    variable: '--font-sfprodisplay',
    subsets: ['latin'],
    display: 'swap',
});
export { primary, SfProDisplay }