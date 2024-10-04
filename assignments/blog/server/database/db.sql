CREATE DATABASE blog;

\c blog

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(250) NOT NULL,
    author VARCHAR(150) NOT NULL,
    content TEXT NOT NULL
);

INSERT INTO posts (title, author, content, "createdAt", "updatedAt")
    VALUES
    ('What To Know About ''The Golden Bachelorette''', 'Jenn Tran',
    'The Golden Bachelorette, the latest spin-off from The Bachelor franchise, premiered Wednesday night on ABC. Here is everything you need to know about the reality dating series.

    Q: Why is it called The Golden Bachelorette?

    A: It tested better with audiences than The Bachelorette Who Will Likely Die in the Not Too Distant Future.

    Q: Who is the Golden Bachelorette?

    A: Joan Vassos competed in The Golden Bachelor but was benched due to an ACL injury. She returns to the franchise after a strong season competing in Junior College Bachelor.

    Q: How old is she?

    A: Vassos is 61 years old, or 304 in television years.

    Q: Why is she trying to replace dad?

    A: She''s not, there is no replacement for your father, but she deserves a chance to be with someone and find happiness again, okay?

    Q: How is the show breaking stereotypes about aging?

    A: The show will serve as proof that you can find social media fame at any stage of life.

    Q: What do the contestants hope to get out of this?

    A: They''re hoping one of the PAs can help unlock their iPhone.

    Q: Will she find love?

    A: If you''re genuinely asking that, the entire ABC comms team deserves a raise.
    ', NOW(), NOW()),

    ('Cult Leader Not Even Charismatic', 'Jake Gyllenhaal', 'NEW YORK—Baffled by the woman''s sway over her millions of acolytes, sources confirmed Monday that local cult leader Taylor Swift, 34, was not even charismatic. ''''Typically, the cult leaders I study are highly persuasive individuals with magnetic personalities—Ms. Swift, however, presents a unique case,'''' said cult expert and psychologist Professor Marion Douglass, who called it ''''bizarre'''' that so many young, impressionable women had pledged their devotion to the artist when there were so many other personalities out there who were leagues more magnetic. ''''She''s managed to amass these so-called Swifties without a drop of charm. It can''t be her doctrine they''re drawn to, because that is not particularly inspiring either. We know these followers would kill for her, but the question is, why?'''' Douglass went on to hypothesize that perhaps Swift was blackmailing her followers with sordid details of their personal lives she had obtained through fan letters.', NOW(), NOW());



