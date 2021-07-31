module.exports = (req, res, next) => {
    res.render('index', { title: 'Home', home: true, project: false, about: false, contact: false });
}