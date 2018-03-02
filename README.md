<div align="center">

# schemegen
Used to generate a subset of the scheme language. At this phase generated code is not syntactically correct.

[![forthebadge](https://forthebadge.com/images/badges/compatibility-pc-load-letter.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/60-percent-of-the-time-works-every-time.svg)](https://forthebadge.com)

</div>

Usage:
1. Clone into the directory with your project: `git clone https://github.com/keegandonley/schemegen.git`
2. cd into the directory `cd schemegen`
3. Run your executable: `node ./index.js <path-to-executable> <lines-to-generate> <tokens-per-line>`. For example: `node ./index.js ../P1.out 10 10`
4. The output of your program will be displayed with randomly generated input!

To prevent the temporary output file from being cleared, run with the flag `--p` or `-preserve`. This can be used to debgug the program because the input that was used is saved until the program is run again.

An example of generated code can be found in temp.ss
