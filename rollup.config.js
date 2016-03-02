import babel from 'rollup-plugin-babel';

export default {
	entry: 'src/index.js',
	dest: 'dist/bundle.js',
	sourceMap: true,
	plugins: [
		babel({
			presets: ['es2015-rollup'],
			babelrc: false
		})
	],
	format: 'umd',
	moduleName: 'randomuser'
};
