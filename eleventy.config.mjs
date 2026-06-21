/**
 * Eleventy (11ty) Configuration
 */

import EleventyVitePlugin from "@11ty/eleventy-plugin-vite";

export default async function (eleventyConfig) {
	// Vite
	eleventyConfig.addPlugin(EleventyVitePlugin);
};
