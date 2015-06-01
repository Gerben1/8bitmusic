import React from 'react';
import './app.css';
import backgroundmusic from './supermario.mp3';
import backgroundmusic2 from './castlevania.mp3';
import backgroundmusic3 from './zelda.mp3';
import backgroundmusic4 from './mansion.mp3';
import backgroundmusic5 from './toki.mp3';
import backgroundmusic6 from './pokemon.mp3';
import backgroundmusic7 from './kwirk.mp3';

import Interface from './components/Interface.jsx';



let mediaCollection = [
	{
		sound: backgroundmusic,
		images: [
			'http://i.giphy.com/KW3nydTAyPaU0.gif',
			'http://i.giphy.com/TrhpJt1hFqgCI.gif',
			'http://i.giphy.com/5LYv6AlMYxebC.gif',
			'http://i.giphy.com/tlb8uRYqsJ19S.gif'
		]
	},
	{
		sound: backgroundmusic2,
		images: [
			'http://i.giphy.com/PbaCt8pQSp7iM.gif',
			'http://i.giphy.com/Iox9DnUoEsRFu.gif',
			'http://i.giphy.com/slvREYowfwgo0.gif',
			'http://i.giphy.com/Qs5dmRhLtKCd2.gif'
		]
	},
	{
		sound: backgroundmusic3,
		images: [
			'http://28.media.tumblr.com/tumblr_lng159pS031qa1xnko1_500.gif',
			'http://l.j-factor.com/gifs/MM5-BossRush.gif',
			'http://www.codiekitty.com/File/BM2/death.gif',
			'http://33.media.tumblr.com/c97e71b72448249d47a2b6f590853b19/tumblr_n4dzzjRbba1qd4q8ao1_500.gif'
		]
	},
	{
		sound: backgroundmusic4,
		images: [
			'http://25.media.tumblr.com/tumblr_lzlpwpQonF1qk26dzo1_500.gif',
			'http://2.bp.blogspot.com/-WPTN9LMuMZ0/UQirYfK6KRI/AAAAAAAAcS8/Buo0hf_QZ_Q/s1600/Final_Fantasy_%2528NES%2529_Replay_09.gif',
			'http://ak-hdl.buzzfed.com/static/2014-03/enhanced/webdr02/17/5/anigif_enhanced-29040-1395049657-7.gif',
			'http://lparchive.org/Shadowgate/Update%206/49-Motari.gif'
		]
	},
	{
		sound: backgroundmusic5,
		images: [
			'http://l.j-factor.com/gifs/WarioLand-EraseFile.gif',
			'https://38.media.tumblr.com/ab314bd61f8d38a474f099f2092c5c2d/tumblr_n1sntcHgSI1qmrf3bo1_400.gif',
			'http://l.j-factor.com/gifs/MM2-Dragon2.gif',
			'http://l.j-factor.com/gifs/LittleSamson.gif'
		]
	},
	{
		sound: backgroundmusic6,
		images: [
			'https://33.media.tumblr.com/57d18c5d00edc7380b7b9bed04f57640/tumblr_n4uohgMI4E1t63sglo1_500.gif',
			'http://pbandpickle.files.wordpress.com/2013/01/metroid-ii_on_screen_active.gif',
			'http://i.giphy.com/Qs5dmRhLtKCd2.gif',
			'http://i.minus.com/iby1habILKir7D.gif'
		]
	},
	{
		sound: backgroundmusic7,
		images: [
			'http://33.media.tumblr.com/e6826ce98b03eae167c2b9c78f84eca2/tumblr_inline_my8hd0rK3f1rba8k0.gif',
			'http://noobtuts.com/content/unity/2d-pacman-game/unity_pacman.gif',
			'https://31.media.tumblr.com/9570db1bc42c8812ca6c661dc76e0f62/tumblr_nl4djcukvv1qd4q8ao1_500.gif',
			'http://fc06.deviantart.net/fs70/f/2012/283/c/5/random_bubble_bobble_gif_by_gumzimakiurura-d5hdije.gif'
		]
	},
	{
		sound: backgroundmusic7,
		images: [
			'https://devilsteel.files.wordpress.com/2014/08/c6009a824f47fa7263df7e65736319cf.gif',
			'http://cdn.mdjunction.com/components/com_joomlaboard/uploaded/images/You_re_the_best1.gif',
			'http://image.blingee.com/images18/content/output/000/000/000/769/745508544_1904876.gif',
			'https://deliciouscookievanessa.files.wordpress.com/2013/12/jdjddj.gif'
		]
	}
];


React.render(<Interface gridSize={2} mediaCollection={mediaCollection}/>, document.body);
